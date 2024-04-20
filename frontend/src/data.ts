//Source code generated by AppGPT (www.appgpt.tech)
let data: any = {
  defaultData: {
    Users: [
      {
        name: 'name 1',
        email: 'email 1',
        password: 'password 1',
        bloodType: 'bloodType 1',
        id: 22,
      },
      {
        name: 'name 2',
        email: 'email 2',
        password: 'password 2',
        bloodType: 'bloodType 2',
        id: 51,
      },
      {
        name: 'name 3',
        email: 'email 3',
        password: 'password 3',
        bloodType: 'bloodType 3',
        id: 46,
      },
      {
        name: 'name 4',
        email: 'email 4',
        password: 'password 4',
        bloodType: 'bloodType 4',
        id: 70,
      },
      {
        name: 'name 5',
        email: 'email 5',
        password: 'password 5',
        bloodType: 'bloodType 5',
        id: 40,
      },
    ],
    BloodTestResults: [
      {
        userId: 1,
        testDate: '2024-07-23T07:16:45.354Z',
        testType: 'testType 1',
        results: 'results 1',
        interpretation: 'interpretation 1',
        recommendations: 'recommendations 1',
        id: 87,
      },
      {
        userId: 2,
        testDate: '2024-09-30T13:33:35.374Z',
        testType: 'testType 2',
        results: 'results 2',
        interpretation: 'interpretation 2',
        recommendations: 'recommendations 2',
        id: 42,
      },
      {
        userId: 3,
        testDate: '2024-11-14T18:39:30.465Z',
        testType: 'testType 3',
        results: 'results 3',
        interpretation: 'interpretation 3',
        recommendations: 'recommendations 3',
        id: 97,
      },
      {
        userId: 4,
        testDate: '2023-10-26T01:19:05.698Z',
        testType: 'testType 4',
        results: 'results 4',
        interpretation: 'interpretation 4',
        recommendations: 'recommendations 4',
        id: 84,
      },
      {
        userId: 5,
        testDate: '2023-09-26T15:37:47.357Z',
        testType: 'testType 5',
        results: 'results 5',
        interpretation: 'interpretation 5',
        recommendations: 'recommendations 5',
        id: 48,
      },
    ],
    Appointments: [
      {
        userId: 1,
        healthcareProviderName: 'healthcareProviderName 1',
        appointmentDateAndTime: '2024-02-19T09:16:23.484Z',
        purpose: 'purpose 1',
        specialInstructions: 'specialInstructions 1',
        id: 9,
      },
      {
        userId: 2,
        healthcareProviderName: 'healthcareProviderName 2',
        appointmentDateAndTime: '2024-07-03T15:30:22.823Z',
        purpose: 'purpose 2',
        specialInstructions: 'specialInstructions 2',
        id: 71,
      },
      {
        userId: 3,
        healthcareProviderName: 'healthcareProviderName 3',
        appointmentDateAndTime: '2023-07-22T08:45:14.466Z',
        purpose: 'purpose 3',
        specialInstructions: 'specialInstructions 3',
        id: 53,
      },
      {
        userId: 4,
        healthcareProviderName: 'healthcareProviderName 4',
        appointmentDateAndTime: '2024-06-13T03:18:22.509Z',
        purpose: 'purpose 4',
        specialInstructions: 'specialInstructions 4',
        id: 35,
      },
      {
        userId: 5,
        healthcareProviderName: 'healthcareProviderName 5',
        appointmentDateAndTime: '2024-09-03T15:33:04.017Z',
        purpose: 'purpose 5',
        specialInstructions: 'specialInstructions 5',
        id: 39,
      },
    ],
    Medications: [
      {
        userId: 1,
        medicationName: 'medicationName 1',
        dosage: 'dosage 1',
        frequency: 'frequency 1',
        startDate: '2023-04-25T00:23:28.279Z',
        endDate: '2024-11-09T08:17:20.415Z',
        specialInstructions: 'specialInstructions 1',
        id: 4,
      },
      {
        userId: 2,
        medicationName: 'medicationName 2',
        dosage: 'dosage 2',
        frequency: 'frequency 2',
        startDate: '2023-09-07T19:14:22.433Z',
        endDate: '2023-09-18T22:17:27.158Z',
        specialInstructions: 'specialInstructions 2',
        id: 18,
      },
      {
        userId: 3,
        medicationName: 'medicationName 3',
        dosage: 'dosage 3',
        frequency: 'frequency 3',
        startDate: '2024-02-28T20:10:34.779Z',
        endDate: '2024-08-27T09:41:30.581Z',
        specialInstructions: 'specialInstructions 3',
        id: 84,
      },
      {
        userId: 4,
        medicationName: 'medicationName 4',
        dosage: 'dosage 4',
        frequency: 'frequency 4',
        startDate: '2023-09-03T08:28:49.621Z',
        endDate: '2025-03-22T15:36:20.478Z',
        specialInstructions: 'specialInstructions 4',
        id: 12,
      },
      {
        userId: 5,
        medicationName: 'medicationName 5',
        dosage: 'dosage 5',
        frequency: 'frequency 5',
        startDate: '2023-12-27T16:01:25.634Z',
        endDate: '2024-07-28T23:26:24.787Z',
        specialInstructions: 'specialInstructions 5',
        id: 49,
      },
    ],
    BloodDonations: [
      {
        userId: 1,
        donationDate: '2024-07-01T12:46:54.057Z',
        location: 'location 1',
        typeOfDonation: 'typeOfDonation 1',
        notes: 'notes 1',
        id: 84,
      },
      {
        userId: 2,
        donationDate: '2024-09-18T02:21:00.898Z',
        location: 'location 2',
        typeOfDonation: 'typeOfDonation 2',
        notes: 'notes 2',
        id: 77,
      },
      {
        userId: 3,
        donationDate: '2024-05-10T20:16:00.160Z',
        location: 'location 3',
        typeOfDonation: 'typeOfDonation 3',
        notes: 'notes 3',
        id: 23,
      },
      {
        userId: 4,
        donationDate: '2024-08-20T10:23:01.098Z',
        location: 'location 4',
        typeOfDonation: 'typeOfDonation 4',
        notes: 'notes 4',
        id: 40,
      },
      {
        userId: 5,
        donationDate: '2024-02-16T09:21:53.642Z',
        location: 'location 5',
        typeOfDonation: 'typeOfDonation 5',
        notes: 'notes 5',
        id: 27,
      },
    ],
    EducationalResources: [
      {
        title: 'title 1',
        content: 'content 1',
        publicationDate: '2024-03-04T02:28:36.680Z',
        authorOrSource: 'authorOrSource 1',
        id: 0,
      },
      {
        title: 'title 2',
        content: 'content 2',
        publicationDate: '2023-06-28T08:34:16.005Z',
        authorOrSource: 'authorOrSource 2',
        id: 23,
      },
      {
        title: 'title 3',
        content: 'content 3',
        publicationDate: '2023-04-27T06:58:39.688Z',
        authorOrSource: 'authorOrSource 3',
        id: 5,
      },
      {
        title: 'title 4',
        content: 'content 4',
        publicationDate: '2023-11-02T00:23:44.636Z',
        authorOrSource: 'authorOrSource 4',
        id: 85,
      },
      {
        title: 'title 5',
        content: 'content 5',
        publicationDate: '2024-04-17T21:07:43.817Z',
        authorOrSource: 'authorOrSource 5',
        id: 46,
      },
    ],
    CommunityForums: [
      {
        topicId: 1,
        userId: 1,
        title: 'title 1',
        content: 'content 1',
        creationDate: '2024-12-13T21:26:47.411Z',
        id: 11,
      },
      {
        topicId: 2,
        userId: 2,
        title: 'title 2',
        content: 'content 2',
        creationDate: '2023-08-14T02:53:33.184Z',
        id: 19,
      },
      {
        topicId: 3,
        userId: 3,
        title: 'title 3',
        content: 'content 3',
        creationDate: '2023-08-06T03:54:44.732Z',
        id: 32,
      },
      {
        topicId: 4,
        userId: 4,
        title: 'title 4',
        content: 'content 4',
        creationDate: '2024-11-02T22:05:37.489Z',
        id: 71,
      },
      {
        topicId: 5,
        userId: 5,
        title: 'title 5',
        content: 'content 5',
        creationDate: '2024-08-24T11:33:01.044Z',
        id: 15,
      },
    ],
    EmergencyContacts: [
      {
        userId: 1,
        contactName: 'contactName 1',
        relationship: 'relationship 1',
        phoneNumber: 'phoneNumber 1',
        specialNotes: 'specialNotes 1',
        id: 74,
      },
      {
        userId: 2,
        contactName: 'contactName 2',
        relationship: 'relationship 2',
        phoneNumber: 'phoneNumber 2',
        specialNotes: 'specialNotes 2',
        id: 20,
      },
      {
        userId: 3,
        contactName: 'contactName 3',
        relationship: 'relationship 3',
        phoneNumber: 'phoneNumber 3',
        specialNotes: 'specialNotes 3',
        id: 14,
      },
      {
        userId: 4,
        contactName: 'contactName 4',
        relationship: 'relationship 4',
        phoneNumber: 'phoneNumber 4',
        specialNotes: 'specialNotes 4',
        id: 23,
      },
      {
        userId: 5,
        contactName: 'contactName 5',
        relationship: 'relationship 5',
        phoneNumber: 'phoneNumber 5',
        specialNotes: 'specialNotes 5',
        id: 43,
      },
    ],
    Hospitals: [
      {
        hospitalName: 'hospitalName 1',
        address: 'address 1',
        contactInformation: 'contactInformation 1',
        specialties: 'specialties 1',
        servicesOffered: 'servicesOffered 1',
        hoursOfOperation: 'hoursOfOperation 1',
        ratingsOrReviews: 'ratingsOrReviews 1',
        id: 9,
      },
      {
        hospitalName: 'hospitalName 2',
        address: 'address 2',
        contactInformation: 'contactInformation 2',
        specialties: 'specialties 2',
        servicesOffered: 'servicesOffered 2',
        hoursOfOperation: 'hoursOfOperation 2',
        ratingsOrReviews: 'ratingsOrReviews 2',
        id: 41,
      },
      {
        hospitalName: 'hospitalName 3',
        address: 'address 3',
        contactInformation: 'contactInformation 3',
        specialties: 'specialties 3',
        servicesOffered: 'servicesOffered 3',
        hoursOfOperation: 'hoursOfOperation 3',
        ratingsOrReviews: 'ratingsOrReviews 3',
        id: 23,
      },
      {
        hospitalName: 'hospitalName 4',
        address: 'address 4',
        contactInformation: 'contactInformation 4',
        specialties: 'specialties 4',
        servicesOffered: 'servicesOffered 4',
        hoursOfOperation: 'hoursOfOperation 4',
        ratingsOrReviews: 'ratingsOrReviews 4',
        id: 90,
      },
      {
        hospitalName: 'hospitalName 5',
        address: 'address 5',
        contactInformation: 'contactInformation 5',
        specialties: 'specialties 5',
        servicesOffered: 'servicesOffered 5',
        hoursOfOperation: 'hoursOfOperation 5',
        ratingsOrReviews: 'ratingsOrReviews 5',
        id: 75,
      },
    ],
  },
};
export default data;
