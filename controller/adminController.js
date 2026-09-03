const { Admin } = require("../models");
const { validateAdmin, validateAdminUpdate } = require("../validation/adminValidation");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const { createTokens, hashToken } = require("../utils/auth");

exports.createAdmin = async (req, res) => {
    const { error } = validateAdmin(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const admin = await Admin.create({
            ...req.body,
            hashed_password: await bcrypt.hash(req.body.hashed_password, 10),
        });
        res.status(201).send(admin);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getAdmins = async (req, res) => {
    try {
        const admins = await Admin.findAll();
        res.status(200).send(admins);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getAdminById = async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id);
        if (!admin) return res.status(404).send("admin not found");
        res.status(200).send(admin);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateAdmin = async (req, res) => {
    const { error } = validateAdminUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const admin = await Admin.findByPk(req.params.id);
        if (!admin) return res.status(404).send("Admin not found");

        const updateData = { ...req.body };
        if (updateData.hashed_password) {
            updateData.hashed_password = await bcrypt.hash(updateData.hashed_password, 10);
        }
        await admin.update(updateData);
        res.status(200).send(admin);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id);
        if (!admin) return res.status(404).send("admin not found");

        const data = admin.toJSON();

        await admin.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchAdmins = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const admins = await Admin.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } },
                    { login: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(admins);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.loginAdmin = async (req, res) => {
    const { login, password } = req.body;
    if (!login || !password) return res.status(400).send("Login and password are required");

    try {
        const admin = await Admin.findOne({ where: { login, is_active: true } });
        if (!admin || !(await bcrypt.compare(password, admin.hashed_password))) {
            return res.status(401).send("Invalid login or password");
        }

        const tokens = createTokens({ id: admin.id, role: "admin" });
        await admin.update({ hashed_refresh_token: await hashToken(tokens.refreshToken) });
        res.status(200).send({ ...tokens, admin: { id: admin.id, name: admin.name, login: admin.login } });
    } catch (err) {
        res.status(500).send(err.message);
    }
};