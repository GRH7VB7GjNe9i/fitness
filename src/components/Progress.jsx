import React from 'react'
import { useEffect } from 'react';  

function Progress() {

    useEffect(() => {  
        const msg = new SpeechSynthesisUtterance();  
        const voices = speechSynthesis.getVoices();  

        // Select the first voice (you can customize this as needed)  
        msg.voice = voices[0];  

        const tags = document.querySelectorAll('p, a, h1, h2, h3'); // Add more tags as needed  

        const handleClick = (e) => {  
            msg.text = e.target.innerText;  
            e.target.style.backgroundColor = "yellow";  
            speechSynthesis.speak(msg);  

            const interval = setInterval(() => {  
                if (!speechSynthesis.speaking) {  
                    e.target.style.removeProperty('background-color');  
                    clearInterval(interval);  
                }  
            }, 100);  
        };  

        // Attach click event listeners  
        tags.forEach((tag) => {  
            tag.addEventListener('click', handleClick);  
        });  

        // Cleanup function to remove event listeners on unmount  
        return () => {  
            tags.forEach((tag) => {  
                tag.removeEventListener('click', handleClick);  
            });  
        };  
    }, []);  

    return (  
      <div className='px-20 '>
      <h1 className='text-3xl font-extrabold mt-15'>Limited mobility doesn’t mean you can’t exercise</h1>
      <p className='mr-10 text-xl mt-10'>You don’t need to have full mobility to experience the health benefits of exercise. If injury, disability, illness, or weight problems have limited your mobility, there are still plenty of ways you can use exercise to boost your mood, ease depression, relieve stress and anxiety, enhance your self-esteem, and improve your whole outlook on life.
        When you exercise, your body releases endorphins that energize your mood, relieve stress, boost your self-esteem, and trigger an overall sense of well-being. If you’re a regular exerciser currently sidelined with an injury, you’ve probably noticed how inactivity has caused your mood and energy levels to sink. This is understandable: exercise has such a powerful effect on mood that it can treat mild to moderate depression as effectively as antidepressant medication. However, an injury doesn’t mean your mental and emotional health is doomed to decline. While some injuries respond best to total rest, most simply require you to reevaluate your exercise routine with help from your doctor or physical therapist.
        If you have a disability, severe weight problem, chronic breathing condition, diabetes, arthritis, or other ongoing illness, you may think that your health problems make it impossible for you to exercise effectively, if at all. Or perhaps you’ve become frail with age and are worried about falling or injuring yourself if you try to exercise. The truth is, regardless of your age, current physical condition, and whether you’ve exercised in the past or not, there are plenty of ways to overcome your mobility issues and reap the physical, mental, and emotional rewards of exercise.
      </p>
    </div>
    );  
};  

export default Progress
