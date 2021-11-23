import React, { useState, useEffect } from 'react';
//import Accordion from '../../common/accordion';

interface FAQData {
    title: string,
    summary: string,
}

export default function FAQ() {
    const [faqQuestions, setFaqQuestions] = useState<FAQData[]>([]);

    useEffect(() => {
        // API Call Here
        let myMap: FAQData[] = [
            {
                title: 'Accordion 1',
                summary: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source'
            },
            {
                title: 'Accordion 2',
                summary: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
            },
            {
                title: 'Accordion 3',
                summary: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
            },
        ];
        setFaqQuestions(myMap);
    }, [])

    return (
        // <Accordion accordionDataMap={faqQuestions} />
        <div> Faq - Good work Army</div>
    );
}