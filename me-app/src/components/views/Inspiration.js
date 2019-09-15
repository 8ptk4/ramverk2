import React from "react";
import styled from "styled-components";


const Section = styled.section`
  img {
    width: 400px;
  }
`;

const Reports = ({updateTitle}) => {
  React.useEffect(() => {
    updateTitle('Inspiration');
  }, [updateTitle]);

  return (
    <>
      <Section>
        <img src="https://cdn.dribbble.com/users/2297683/screenshots/5928095/daily_ui_080.png" class="img-fluid float-right" alt="Responsive image"></img>
        <p>After looking for inspirations for date pickers on dribble, I found one that got my interest. I managed to make my own date 
          picker almost like the one from dribble but with some differences in design.</p> 

        <p>For a starter I used onClick on my arrows but it turned out not to be so good, actually really bad consider UX optimization. 
          The main reason it’s not that good is because clicking yourself to example 1960 will take a long time. Because of that I implemented 
          onMouseDown so you instead can hold the mouse button to navigate the years faster. I would say that my datepicker might not be the best 
          for the web but it would probably work out well for mobiles with some sort of swipe functionality.</p>

        <p>For the form fields I got inspiration from a youtube video <a href="https://www.youtube.com/watch?v=jrFMOrRrcvo&t=">Here</a>. I kept the fields 
          simple and made nice clear labels and didn’t use any placeholders. Each field validates with my own set of validations and you can’t submit the 
          form if there are any validation errors.</p>

        <p><a href="https://github.com/8ptk4/ramverk2">https://github.com/8ptk4/ramverk2</a></p>
      </Section>
    </>
  );
};



export default Reports;