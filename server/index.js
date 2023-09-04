require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./connectDB");
const Notes = require("./models/Notes");

const app = express();
const PORT = process.env.PORT || 8000;

// INITIALIZE MONGODB
connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET ALL NOTES - [READ ALL]
app.get("/api/notes", async (request, response) => {
    try {
        const data = await Notes.find({});

        if (!data) {
            throw new Error('An error occured while fetching notes.')
        }

        response.status(201).json(data);

    } catch (error) {
        response.status(500).json({ error: 'An error has occured while fetching notes....' })
    }
});

// GET NOTE BY ID - [READ (ID)]
app.get("/api/notes/:id", async (request, response) => {
    try {
        const modelId = request.params.id;

        const data = await Notes.findById(modelId);

        if (!data) {
            throw new Error('No result found 🤷')
        }

        response.status(201).json(data);

    } catch (error) {
        response.status(500).json({ error: 'An error has occured while fetching a note....' })
    }
});

// ADD || INSERT NOTE - [CREATE]
app.post("/api/notes", async (request, response) => {
    try {
        const { title, description } = request.body;

        const data = await Notes.create({ title, description });

        if (!data) {
            throw new Error('An error has occured while creating a note.')
        }

        response.status(201).json(data);

    } catch (error) {
        response.status(500).json({ error: 'An error has occured while creating a note....' })
    }
});

// UPDATE NOTE - [UPDATE]
app.put("/api/notes/:id", async (request, response) => {
    try {
        const modelId = request.params.id;
        const { title, description } = request.body;

        const data = await Notes.findByIdAndUpdate(modelId, { title, description });

        if (!data) {
            throw new Error('An error has occured while updating a note.')
        }

        response.status(201).json(data);

    } catch (error) {
        response.status(500).json({ error: 'An error has occured while updating a note....' })
    }
});

// DELETE NOTE - [DELETE]
app.delete("/api/notes/:id", async (request, response) => {
    try {
        const modelId = request.params.id;
        const data = await Notes.findByIdAndDelete(modelId);

        if (!data) {
            throw new Error('An error has occured while deleting a note.')
        }

        response.status(201).json(data);

    } catch (error) {
        response.status(500).json({ error: 'An error has occured while deleting a note....' })
    }
});





















app.get("/", (request, response) => {
    response.json("Hi, User");
});

// OTHER URL SHOW NOT FOUND
app.get("*", (request, response) => {
    response.sendStatus("404");
});

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
})