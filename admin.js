import TryCatch from "../middlewares/Trycatch.js";
import { Courses } from "../models/Courses.js";

export const createCourse = TryCatch(async (req, res) => {
    const { title, description, category, createdBy, duration, price } = req.body;

    const image = req.file;

    await Courses.create({
        title,
        description,
        category,
        createdBy,
        duration,
        price,
        image: image?.path,
    });

    res.status(201).json({
        message: "Course created successfully",
    });
});

