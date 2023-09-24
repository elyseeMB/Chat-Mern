import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const salt = bcrypt.genSaltSync(10);

export const register = async (req, res) => {
    try {
        const {username, password} = req.body;
        const hasdedPassword = bcrypt.hashSync(password, salt);
        const userDoc = await prisma.user.create({
            data:{
                username,
                password: hasdedPassword,
            }
        })
        res.json(userDoc);
    } catch (e) {
        res.status(404).json({message: e.message})
        console.error(e);
    }
}