import { GoogleGenerativeAI} from "@google/generative-ai";
import 'dotenv/config'

const genAI = new GoogleGenerativeAI('AIzaSyBmISvteNKz3CKmnJ6tpA_NKxLqvhvyNkg');

export default async function run(extractedText) {
    const model = genAI.getGenerativeModel({
        // Using `responseMimeType` requires either a Gemini 1.5 Pro or 1.5 Flash model
        model: "gemini-1.5-flash"
        // generationConfig: {
        //     responseMimeType: "application/json",
        //     responseSchema: {
        //         type: SchemaType.ARRAY,
        //         items: {
        //             type: SchemaType.OBJECT,
        //             properties: {
        //                 book_id: {
        //                     type: SchemaType.STRING
        //                 },
        //                 title: {
        //                     type: SchemaType.STRING
        //                 },
        //                 author: {
        //                     type: SchemaType.STRING
        //                 },
        //                 genre: {
        //                     type: SchemaType.STRING
        //                 },
        //                 url: {
        //                     type: SchemaType.STRING
        //                 },
        //                 plot: {
        //                     type: SchemaType.STRING
        //                 },
        //                 description: {
        //                     type: SchemaType.STRING
        //                 }
        //             },
        //         }
        //     }
        // }
    });

    // Construct your prompt based on the request body
    const prompt = `what can you tell me about this ${extractedText}`
    try {
        // Generate content using the model
        const result = await model.generateContent(prompt);
        const response = await result.response.text();
        console.log(response);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send("An error occurred while processing your request.");
    }
};
