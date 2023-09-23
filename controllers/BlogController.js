//importing the model
import BlogModel from "../models/BlogModel.js";


//** Crud methods **//

//Show all records
export const getAllBlogs = async(req, res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Show just one records
export const getBlog = async(req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(blog[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Create a record
export const createBlog = async(req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Update a record
export const updateBlog = async(req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message": "Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Delete a record
export const deleteBlog = async(req, res) => {
    try {
        await BlogModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message": "Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}