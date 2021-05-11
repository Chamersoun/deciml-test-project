import USImage from "../assets/image/US.jpg";
import AustraliaImage from "../assets/image/Australia.jpg";
import NewSouthWalesImage from "../assets/image/NewSouthWales.jpg";

export const currentForecasts = [
    {
        id: 1,
        title: "US GDP",
        condition: "What will US GDP growth be in 2021?",
        dueDate: "2021-12-31T00:00:00",
        image: USImage,
        forecastsNumber: 128,
        forecast: {
            percentage: 8.6,
            isBoolean: false
        }
    },
    {
        id: 2,
        title: "Australia CPI",
        condition: "What will Australian core inflation be for Q1 2022?",
        dueDate: "2021-04-01T00:00:00",
        image: AustraliaImage,
        forecastsNumber: 1011,
        forecast: {
            percentage: 1.2,
            isBoolean: false
        }
    },
    {
        id: 3,
        title: "NSW Business Confidence",
        condition: "Will New South Wales business confidence improve or fall in 2021?",
        dueDate: "2021-01-20T00:00:00",
        image: NewSouthWalesImage,
        forecastsNumber: 23,
        forecast: {
            percentage: 80,
            isBoolean: true
        }
    }
];
