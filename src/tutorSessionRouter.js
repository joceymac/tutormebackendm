import express from 'express';

const tutorSessionRouter = express.Router();

//create tutorSession

tutorSessionRouter.post('/api/tutorsession', async (req, res) => {
    let body = req.body;
    let sql = 'SELECT * FROM tutor WHERE emailaddress = ? ';
    let tutor = {}
    await db.query(sql, body.emailaddress, async function(error, results, fields) {
        if (error) throw error
    //    console.log(typeof JSON.parse(JSON.stringify(results)));
        //return JSON.parse(JSON.stringify(results));
        tutor = results[0]

        // TODO: use '/api/student/new' as a reference to copy here the function below
        // if (tutor) will change to if (results.length > 0) then the rest can remain pretty much the same
    });
    console.log(tutor)

    //console.log(tutor);

    if (tutor) {
        // check the password - if tutor exist
        let isPasswordCorrect = req.body.password === tutor.password;
        console.log(req.body.password +" " +  tutor.password)

        // password - right
        if (isPasswordCorrect) {
            // Create session
        console.log("Password is Correct")
        } else {
            return res.status(400).send({ message: 'Incorrect password' })
        }
        // password - wrong


    } else {
        return res.status(400).send({ message: 'Incorrect email ' })
    }

});


module.exports = tutorSessionRouter;






