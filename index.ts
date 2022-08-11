import { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';

export const user:HttpFunction = (req, res) => {
        res.status(200).send("Hello From Google Cloud! ☁")
    }
;