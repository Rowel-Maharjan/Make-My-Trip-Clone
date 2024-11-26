import React, { useState } from "react";
import { aboutData, FaqData } from "./cabs.config";

const About = () => {
    const [expandedIndexes, setExpandedIndexes] = useState([]);

    const handleToggle = (index) => {
        if (expandedIndexes.includes(index)) {
            setExpandedIndexes(expandedIndexes.filter((i) => i !== index));
        } else {
            setExpandedIndexes([...expandedIndexes, index]);
        }
    };

    function DescriptionTemplate({ aboutData, value }) {
        return (
            <div className="flex flex-wrap">
                {aboutData.map((item, index) => {
                    const combinedDescription = item.description.join(' ');
                    const isTruncated = combinedDescription.length > 500;
                    let truncated = false;
                    let truncatedDescription = '';
                    let totalLength = 0;

                    const displayedParagraphs = item.description.map((paragraph, pIndex) => {
                        if (!truncated) {
                            const paragraphLength = paragraph.length;
                            totalLength += paragraphLength;

                            if (totalLength > 500) {
                                truncated = true;
                                truncatedDescription = paragraph.slice(0, 500 - (totalLength - paragraphLength)) + "...";
                                return (
                                    <p key={pIndex}>
                                        {truncatedDescription}
                                    </p>
                                );
                            }

                            return <p key={pIndex}>{paragraph}</p>;
                        }
                        return null;
                    });

                    return (
                        <div
                            key={index}
                            className={`flex flex-col max-w-[50%] gap-6 flex-grow pb-[28px] ${index % 2 === 0 ? "pr-24" : "pl-24"} ${index >= 2 ? "mt-[44px]" : ""} ${index < value - 1 ? "border border-b-[#979797]" : ""}`}
                            onClick={() => isTruncated && handleToggle(index)}
                            style={{ cursor: isTruncated ? 'pointer' : 'default' }}
                        >
                            <div className="text-base font-bold">{item.title}</div>
                            <div className="text-xs font-normal text-[#4a4a4a]">
                                {expandedIndexes.includes(index) ? (
                                    item.description.map((paragraph, pIndex) => (
                                        <p key={pIndex}>{paragraph}</p>
                                    ))
                                ) : (
                                    displayedParagraphs
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="bg-[#e7e7e7] w-full pt-16 pb-14">
            <div className="w-[1200px] mx-auto">
                <DescriptionTemplate aboutData={aboutData} value = {7}/>
                <div className="font-bold text-2xl mb-5">FAQs</div>
                <DescriptionTemplate aboutData={FaqData} value = {13} />

            </div>
        </div>
    );
};

export default About;
