import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from "../components/Main/firebase-config";
import { Link } from 'react-router-dom';
// import "./output.css"
import "./Page2/output.css";
let name = ["Hey", "Hi", "Hello"];
// const Name = name.map((i)=>{
//     console.log(i)
//     return (<>
//         <h1>Hindustan Institute of {i}</h1>
//         <h3>Address:- Coimbatore, Tamilnadu</h3>
//         <h3>Contact:- 1234515544</h3>
//             {/* <button onClick={redirect} className="btn btn-info btn-lg ms-2">Go to Location</button> */}
//             {/* <button onClick={cabredirect} className="btn btn-warning btn-lg ms-2">Cab Service</button> */}
//             </>
//         )
// })

const Hello = () => {
    const { value } = useParams();
    // console.log(value);

    const useCollection = collection(db, 'users-1')
    const [users, setUser] = useState([])
    const [feed, setFeed]=useState('')
    const [newProp, setProp]=useState('')
    React.useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(useCollection);
            console.log(data);
            console.log(data.docs);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
        // find();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // const updateUser=async()=>{
    //     let collectionRef = db.collection('users-1');


    //     collectionRef.update({feedback:feed}).then(res => {
    //     console.log(`Document updated at ${res.updateTime}`);
    //   });
    // }

    // const find = () => {
    //     // eslint-disable-next-line no-lone-blocks
        // {
            name=[];
            // let array = [];
            users.map((user) => {
                if (user.Property === value) {
                    console.log(user.Name)
                    name.push(user.Address);
                    return(
                        <h1>Contact : {user.Contact}</h1>
                    )
                    // name.map((i)=>{
                    // return (<>
                    //     <h1>Hindustan Institute of {name}</h1>
                    //     <h3>Address:- Coimbatore, Tamilnadu</h3>
                    //     <h3>Contact:- 1234515544</h3>
                    //         {/* <button onClick={redirect} className="btn btn-info btn-lg ms-2">Go to Location</button> */}
                    //         {/* <button onClick={cabredirect} className="btn btn-warning btn-lg ms-2">Cab Service</button> */}
                    //         </>
                    //     )}
                    // )
                //    document.getElementById('printC').innerHTML=name
            
                }
            })
            const craeteUser = async () => {
              await addDoc(useCollection, { Property_Name : newProp, Feedback : feed});
              alert("Your Valuable feedback has been recorded!");
              }
            var Lift;
            var Lift_A;
            var Lift_B;
            var Ramp;
            var Ramp_A;
            var Ramp_B;
            var Wheelchair;
            var Wheelchair_A;
            var Wheelchair_B;
            var Washroom;
            var Washroom_A;
            var Washroom_B;
            var Braille;
            var Braille_A;
            var Braille_B;
            var l_i;
            var r_i;
            var wh_i;
            var wc_i;
            var br_i;
            const Name = users.map((i)=>{
    // console.log(i)
    if(i.Property===value){
        if(i.Lift===""){
            Lift = "Unavailable ";
            Lift_A = "Unaccessible";
            Lift_B = "     ";
          l_i="bi-file-earmark-excel-fill";

            

        }
        else{
            Lift= "Available ";
            Lift_A= "Accessible";
            Lift_B= "Watch videos/photos";
          l_i="bi-check-circle-fill";
        }
        if(i.Ramp===""){
            Ramp = "Unavailable";
            Ramp_A = "Unaccessible";
            Ramp_B = "         ";
           r_i="bi-file-earmark-excel-fill";

        }
        else{
            Ramp= "Available";
            Ramp_A= "Accessible";
            Ramp_B = "Watch videos/photos";
            r_i="bi-check-circle-fill";
        }
        if(i.Washroom===""){
            Washroom = "Unavailable";
            Washroom_A = "Unaccessible";
            Washroom_B= "      ";
          wc_i="bi-file-earmark-excel-fill";

        }
        else{
            Washroom= "Available";
            Washroom_A= "Accessible";
            Washroom_B= "Watch videos/photos";
            wc_i="bi-check-circle-fill";
        }
        if(i.Wheelchair===""){
            Wheelchair = "Unavailable";
            Wheelchair_A = "Unaccessible";
            Wheelchair_B= "        ";
          wh_i="bi-file-earmark-excel-fill";

        }
        else{
            Wheelchair= "Available";
            Wheelchair_A= "Accessible";
            Wheelchair_B= "Watch videos/photos";
            wh_i="bi-check-circle-fill";
        }
        if(i.Braille_Signage===""){
            Braille = "Unavailable";
            Braille_A = "Unaccessible";
            Braille_B = "";
            br_i="bi-file-earmark-excel-fill";

        }
        else{
            Braille= "Available";
            Braille_A= "Accessible";
            Braille_B= "Watch videos/photos";
          br_i="bi-check-circle-fill";
        }
    return (<>
        <span><h1>Place: {i.Property_Name}</h1></span>
        <span><h1>Address: {i.Address}</h1></span>
        <h1>Contact: {i.Contact}</h1>
        <h1>Emergency Contact: {i.Emg}</h1>
           
            <section>
   
    
    <div>
        {/* <h1><span id="property_type1"></span></h1>
        <h2><span id="property_type2"></span></h2> */}
        <table>
          <thread>
          <tr>
            <th>        <h3>
          {/* <button onClick="Go_To_Location()">Go To Location </button> */}
        </h3></th>
        <th>
          <h3>
            {/* <button onClick="cab_ola()">Cab Service</button> */}
          </h3>
        </th>
        </tr>
      </thread>
      </table>
        

   
    </div>

    <div class="tbl-header">
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>Facility(सुविधा)</th>
            <th>Availibility(उपलब्धता)</th>
            <th>Accessibility(उपयोगिता)</th>
            <th>Reference(लाभ उठाने के लिए)</th>
           
          </tr>
        </thead>
      </table>
    </div>
    <div class="tbl-content">
      <table cellpadding="0" cellspacing="0" border="0">
        <tbody>
          <tr>
            <td className='bi-door-closed-fill'>Lift</td>
            <td id='f1' className={l_i}   >{Lift}</td>
            <td id="A1" className={l_i}   >
              {Lift_A}
            </td>
            <td>
            <a href={i.Lift} target="_blank" id="vid1">{Lift_B}</a>
            </td>
          </tr>
          <tr>
            <td className="bi-alt"> Ramp</td>
            <td className={r_i} >{Ramp}</td>
            <td id="A2" className={r_i} >
              {Ramp_A}
            </td>
            <td>
            <a onClick="link2()" href={i.Ramp} target="_blank" id="vid2">{Ramp_B}</a>
            </td>
          </tr>
          <tr>
            <td>Wheelchair</td>
            <td id='f3' className={wh_i} >{Wheelchair}</td>
            <td id="A3" className={wh_i} >
              {Wheelchair_A}
            </td>
            <td>
            <a onClick="link3()" href={i.Wheelchair} target="_blank" id="vid3">{Wheelchair_B}</a>
            </td>
          </tr>
          <tr>
            <td className='bi-badge-wc-fill'>WashRoom</td>
            <td id='f4' className={wc_i } >{Washroom}</td>
            <td id="A4" className={wc_i} >
              {Washroom_A}
            </td>
            <td>
            <a onClick="link4()" href={i.Washroom} target="_blank" id="vid4">{Washroom_B}</a>
            </td>
          </tr>
          <tr>
            <td className="bi-grip-horizontal green">Braille Signage</td>
            <td id='f5' className={br_i} >{Braille}</td>
            <td id="A5" className={br_i} >
              {Braille_A}
            </td>
            <td>
            <a onClick="link5()" href={i.Braille} target="_blank" id="vid5">{Braille_B}</a>
            </td>
          </tr>
          
        </tbody>
      </table>
      
    </div>
    <button className="btn btn-info btn-lg ms-2"><a className='cab' href={`http://maps.google.com/?q=${i.Address}`} target="_blank">Go to Location</a></button>
            <button className="btn btn-warning btn-lg ms-2"><a className='cab' href={`https://book.olacabs.com/?serviceType=p2p&when=NOW&utm_source=widget_on_olacabs&pickup_name=Current%20Location&drop_lat=10.8945458&drop_lng=76.9970671&drop_name="${i.Address}"&pickup=current_location`} target="_blank">Cab Service</a></button>
            <button className="btn btn-success btn-lg ms-2"> <a href='https://hilarious-entremet-b26680.netlify.app/' target="_blank" className='h-50'><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M5.5 10a.5.5 0 0 0-1 0a5.5 5.5 0 0 0 5 5.478V17.5a.5.5 0 0 0 1 0v-2.022a5.5 5.5 0 0 0 5-5.478a.5.5 0 0 0-1 0a4.5 4.5 0 1 1-9 0Zm7.5 0a3 3 0 0 1-6 0V5a3 3 0 0 1 6 0v5Z" /></svg></a>
              </button>
    {/* <textarea></textarea> */}
    <form> <h1 className='.font-weight-bold'>Feedback</h1><div className="form-outline mb-2">
    <input className="form-control form-control-lg" type="text" onChange={(event) => {
                            setProp(event.target.value)
                          }}  placeholder="Enter Property Name"/>
        <textarea col="500" rows="3" onChange={(event) => {
                            setFeed(event.target.value)
                          }} className="form-control form-control-lg" placeholder='Leave Your Feedback Here!'></textarea>
    </div>
    <button type='reset'className="btn btn-warning btn-lg ms-2" onClick={craeteUser} >Post Feedback</button></form>
  </section>
            </>
        )
    }
})
            console.log(name)
            //  function redirect(){
            //     window.open("http://maps.google.com/?q="+name)
            // }
            //  function cabredirect(){
            //     // window.open("http://maps.google.com/?q="+name)
            //     window.open("https://book.olacabs.com/?serviceType=p2p&when=NOW&utm_source=widget_on_olacabs&pickup_name=Current%20Location&drop_lat=10.8945458&drop_lng=76.9970671&drop_name="+name+"&pickup=current_location") 
            // }
        // }
    // }

    return (
        <>
            {/* <h1>Hindustan Institute of {}</h1>
<h3>Address:- Coimbatore, Tamilnadu</h3>
<h3>Contact:- 1234515544</h3> */}
            {/* <button className="btn btn-info btn-lg ms-2">Go to Location</button>
    <button className="btn btn-warning btn-lg ms-2">Cab Service</button> */}
            {/* <Name ></Name> */}
            {Name}
        </>
    );
};


export default Hello;