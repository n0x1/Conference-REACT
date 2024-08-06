import React, { useEffect } from 'react';

const CalendlyPopup = ({ username }) => {
    useEffect(() => {
        // Load Calendly CSS
        const link = document.createElement('link');
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        // Load Calendly JavaScript
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        // Cleanup
        return () => {
            document.head.removeChild(link);
            document.body.removeChild(script);
        };
    }, []);

    const url = `https://calendly.com/${username}`
    const handleClick = (event) => {
        event.preventDefault();
        window.Calendly.initPopupWidget({ url });
    };

    return (
        <a href="" onClick={handleClick}>
            Schedule on Calendly
        </a>
    );
};

export default CalendlyPopup;
