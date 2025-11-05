// Sample CV data generator
export const generateSampleCV = () => {
  return {
    personal: {
      fullName: "John Doe",
      jobTitle: "Web Developer",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      address: "linkedin.com/in/johndoe",
      city: "New York City",
      state: "",
      zipCode: ""
    },
    summary: "Experienced web developer with a passion for creating user-friendly and visually appealing websites. Skilled in HTML, CSS, and JavaScript, with a focus on front-end development and responsive design.",
    experience: [
      {
        id: 1,
        company: "ABC Company",
        position: "Front-end Developer",
        location: "New York",
        startDate: "2018-01-01",
        endDate: "2020-12-31",
        current: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Developed responsive web applications using React and modern JavaScript frameworks."
      },
      {
        id: 2,
        company: "XYZ Agency",
        position: "UI Designer",
        location: "San Francisco",
        startDate: "2016-01-01",
        endDate: "2017-12-31",
        current: false,
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Created user interface designs and prototypes."
      }
    ],
    education: [
      {
        id: 1,
        school: "University of California",
        degree: "Bachelor of Science in Computer Science",
        field: "",
        startDate: "2012-09-01",
        endDate: "2016-05-01",
        gpa: "3.8/4.0"
      }
    ]
  }
}

export const generateRandomCV = () => {
  return generateSampleCV()
}