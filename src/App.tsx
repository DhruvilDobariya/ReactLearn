import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Parson } from './components/Parson';
import { ParsonList } from './components/ParsonList';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Style } from './components/Style';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomeComponent } from './components/html/CustomComponent';
import { API } from './components/useEffect/api';
import { Memo } from './components/useMemo/Memo';
import {FormikForms} from './components/FromikFroms/FormikForms';
import { YupForms } from './components/FromikFroms/YupForms';
import { FormikFormsElement } from './components/FromikFroms/FormikFormsElement';


function App() {
    let user = {
        id : 1,
        name : "Dhruvil"
    };
    
    let userList = [
        {
            id : 1,
            name : "Dhuvil"
        },
        {
            id : 2,
            name : "Jenil"
        },
        {
            id : 3,
            name : "Dhaval"
        },
        {
            id : 4,
            name : "Bhargav"
        }
    ]
    
    return (
        <>
        <h2 className='d-flex justify-content-center'>Props</h2>
        <br />
        <Greet name="Dhruvil" messages={10} isLogIn={true}/>
        <Parson user={user}/>
        <ParsonList users={userList}/>
        <Heading>This is Heading</Heading>
        <Oscar>
            <Heading>This heading from Oscar</Heading>
        </Oscar>
        <Status status='Loading'/>
        <Button handelClick={(event, id)=>{
            console.log("Button clicked", event, id);
        }}/>
        {/* <Input handleChange={(event)=>{
            console.log(event, event.target.value)
        }}/> */}
        <Input handleChange={(event)=>{}}/>
        <Style style={{color : "red", margin : "4px 0px"}}/>

        <Private isLoggedin={true} component={Profile}/>
        <RandomNumber value={10} isPositive/>

        <Toast position='left-top'/>
        <CustomeComponent isLogIn={true} name="Dhaval" messages={10}/>
        <br />

        <h2 className='d-flex justify-content-center'>Use Effect</h2>
        <br />
        <API/>
        <h2 className='d-flex justify-content-center'>Use Memo</h2>
        <br />
        <Memo/>

        <br />
        <h2 className='d-flex justify-content-center'>Simple Formik Forms</h2>
        <br />
        <FormikForms/>

        <br />
        <h2 className='d-flex justify-content-center'>Yup Forms</h2>
        <br />
        <YupForms/>

        <h2 className='d-flex justify-content-center'>Formik Forms Elements</h2>
        <br />
        <FormikFormsElement/>
        </>
    );
}
    
export default App;
    