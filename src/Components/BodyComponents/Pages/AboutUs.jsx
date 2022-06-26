import React from 'react'
import Navigation from '../HomePage/Navigation'
import Carasoul from '../HomePage/Carasoul'
import { Container } from 'react-bootstrap'


export default function AboutUs() {
  return (
    <>
        <Navigation />
        <Carasoul/>
        <Container>
        <br/>
        <h3 style={{textAlign:'center'}}>About Us:</h3>
        <hr />
        <p style={{textAlign:'justify'}}>We’re one of the Leading Education Service Providers, rendering a wide range of services from coaching to training in the field of education, through dedicated efforts of professionals, devoted to ensuring success and growth of students.</p>
        <br/>
        <h3 style={{textAlign:'center'}}>Overview</h3>
        <hr />
        <p style={{textAlign:'justify'}}>At SANJAI PANDEY CLASSES, we have developed a unique examination preparatory program for students of classes 6th, 7th, 8th, 9th, 10th, 11th & 12th and IIT-JEE (Main/Advance) & AIPMT. The program, designed by experts impart all necessary skills to students that would enable them to understand and manage all critical factors that are necessary to score well in examinations, and come out with flying colours.</p>
        <p style={{textAlign:'justify'}}>It is a well-known fact that education plays an important role in shaping the life of an individual and that it is the education which equips students with skills which help them think, analyze situations and take appropriate decisions.
Students in the age group of 14 to 16 years (of classes VIII, IX and X) are especially very receptive. A properly planned delivery of concepts, when clubbed with appropriately calculated and executed activities can bring about a positive change in the way a student approaches subject such as Maths and Science.</p>
        <p style={{textAlign:'justify'}}>A good grounding in Maths and Science is of great importance, as it helps the students develop logical and analytical thinking skills. These are skills which students will need in future irrespective of the field in which they may want to make a career in. Apart from this in the highly competitive landscape that we are in today, what becomes more important is the relative performance of the student rather than the absolute marks that he/she scores in a school examination.</p>
        <p style={{textAlign:'justify'}}>We believe that it is the attitude towards a subject that is more important than just scoring marks. At the same time good conceptual understanding of the subject will always reflect in the kind of marks a student scores in the examination.</p>
        <p style={{textAlign:'justify'}}>As we have said earlier, in the present day scenario, performing well in the examinations at school is very important, as it not only helps students gain much needed confidence but also helps them secure entry to prestigious institutions and programs. Being strong with the fundamentals is an important factor in scoring well, but there are many other factors which also contribute to a student's success.</p>
        <br/>
        <h3 style={{textAlign:'center'}}>Advantages</h3>
        <hr />
        <h4 style={{textAlign:'left'}}>1) Overview</h4>
        <p style={{textAlign:'justify'}}>Our vision is to become a educational set up that works towards the overall development of students by strengthening the brightest and young minds to achieve and fly high in sky so as to achieve best in their lives. At SANJAI PANDEY CLASSES, we nurture the students to explore their full potential so as to boost their self-confidence and moral in order to realize their dreams by advanced teaching methodology. At SANJAI PANDEY CLASSES, students gain an understanding of the courses they enroll for and get mentorship in career directions while enhancing the educational process as they become the next generation of professionals who are going to run the country's economy and steer it towards growth and prosperity.</p>
        <h4 style={{textAlign:'left'}}>2) Mission</h4>
        <p style={{textAlign:'justify'}}>At SANJAI PANDEY CLASSES, our mission is to deliver quality education to each and every student and to ensure his/her success. We commit ourselves to excellent education and boast of a number of faculty members who are totally devoted and committed so as to build trust and compassion between teachers and students and ensure that the students achieve what they came for.</p>
        </Container>
    </>
  )
}
