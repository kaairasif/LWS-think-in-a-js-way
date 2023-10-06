const hasMeeting = false
const meeting = new Promise((resolve, reject) => {
        if(!hasMeeting) {
           const meetingDetails = {
            name: "Technical meeting",
            location: "Google Meet",
            time: "8:00 PM"
           }
           setTimeout(() => {
            resolve(meetingDetails)
           } , 1000)
           
        } else {
            reject( new Error("meeting already scheduled!"))
        }
})


const addToCalender = (meetingDetails) => { 
    const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
    const modifiedTime = parseInt(meetingDetails.time) > 10 ? meetingDetails.time = 12 : meetingDetails.time = 9
    return   new Promise((resolve, reject) => {
        if(calender) {
            setTimeout(() => {
                resolve({calender, modifiedTime})
            }, 1000)
        } else {
            reject( new Error("Somthing wrong while processing data!"))
        }       
    })
}

const specificTimeCheck = (md) => {
    const time = parseInt(md)
    return new Promise((resolve, reject) => {
        if(time > 10) {
            resolve("Little late")
        } else {
            reject("No problem to continue")
        }
    })
}

// meeting
//     .then(addToCalender)
//     .then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err.message)
//     })


async function myMeeting() {
    try {
        const meetingDetails = await meeting
        const calender = await addToCalender(meetingDetails)
        console.log("🚀 ~ file: promises.js:59 ~ myMeeting ~ calender:", calender.calender)
        const timeCheck = await specificTimeCheck(calender.modifiedTime
            )
        console.log("🚀 ~ file: promises.js:62 ~ myMeeting ~ timeCheck:", timeCheck)
        
    } catch(err) {
        console.log(err)
    }
}    

myMeeting()

    console.log("hello")

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`promise 1 resolve`)
//     }, 1000)
// })



// const promise2 = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         resolve(`promise 2 resolve`)
//     }, 999)
// })

// Promise.race([promise1, promise2]).then((res) => {
//     console.log(res)
// })



// (async function() {
//     console.log("hello")
//     return `hello`;
// })()

// function friendlyFunction() {
//     return Promise.resolve(`hello`);
// }
// console.log(friendlyFunction())

// console.log("hi")

