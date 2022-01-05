// main function
let emailFunction = functions.https.onRequest(async (req, res) => {
  let fields = getFieldsFromRequest(req); // sync
  let courseId = extractCourseIdFromEmailAddress(fields); // sync
  let courseEmail = await getEmailOfCourseWithCourseId(courseId, res); // async
  let savedToCloud = await saveToCloudFirestore(fields, courseEmail, courseId); // async
  let sentEmail = await sendEmailWithSendgrid(fields, courseEmail);  // async
  res.send(savedToCloud, sentEmail); // Once sentEmail and saveToCloud have been returned (aka promises have been resolved, aka their functions have been run), res.send() will run so Firebase/SendGrid know that func worked. 
});

// Helper methods below
function getFieldsFromRequest(req) { // sync
    let fields = readTheFieldsFromReqWithBusboy(req)
    return fields;
}

function extractCourseIdFromEmailAddress(fields) { // sync
    let courseId = fields.to.substring(0, fields.to.indexOf('@'));
    return courseId;
}

async function getEmailOfCourseWithCourseId(courseId, res) { // async important
    let courseData = await doAsyncStuffWithFirestore(courseId)
    let courseEmail = courseData.email;
    return courseEmail; // due to function being labeled async above, this is the equivalent of wrapping the whole function in 'return new Promise(resolve) => {}' and then returning a 'resolve(result)'
}

async function sendEmailWithSendgrid(fields, courseEmail) { // async important
    let msg = {to: courseEmail, from: fields.from, text: fields.text}
    let sentEmail = await doAsyncStuffWithSendGrid(msg)
    return sentEmail; // due to function being labeled async above, this is the equivalent of wrapping the whole function in 'return new Promise(resolve) => {}' and then returning a 'resolve(result)'
}

async function saveToCloudFirestore(fields, courseEmail, courseId) { // async important
    let savedToCloud = await doAsyncStuffWithFirestore(fields, courseEmail, courseId)
    return savedToCloud;
}