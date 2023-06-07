import React from 'react'
import  { useEffect,useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
const Conformation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const[id,setid]=useState()
  const userData = localStorage.getItem('userData');
    const parsedData = JSON.parse(userData);
  useEffect(() => {
    window.scrollTo(0, 0);
    
    

    // Access the values
    const name = parsedData.name;
    // console.log(name)
    const email = parsedData.email;
    const id = parsedData.id;
    setUser({name,email,id})
    // console.log(parsedData.email)
    setEmail(parsedData[0].email)
    setName(parsedData[0].name)
    setid(parsedData[0].id)
axios.get('http://localhost:5000/records')
.then((response) => {

  setUser(response.data)
    console.log(response.data);
    setEmail(response.data[0].email)
    setName(response.data[0].name)
    setid(response.data[0].id)

})

.catch((error) => console.log(error.message))

    
  }, []);
  const [user, setUser] = useState({name:" ",email:" ",id:" "});
  const handleSubmit =async (e) => {
    e.preventDefault();
    // console.log(id)
    axios.put(`http://localhost:5001/Editprofile/${id}`, {
    name:name,
    email:email,
  })
    .then(function (response) {

      console.log(response);

    })
    .catch(function (error) {
      console.log(error);
    });
    window.location.href="/Userprofile/"+email;

  };

  console.log(user)

  const [state, setState] = useState(true)

  return (
    state ? (
      <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setState(false)}></div>
          <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                  <div className="mt-3">
                  
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
                <label
                  htmlFor="company_website"
                  className="block text-sm font-medium text-gray-700"
                >
                User Name
                </label>
                <div className="mt-1 flex rounded-md h-10 shadow-sm">
                
                  <input
                    type="text"
                    name="user-name"
                    id="user-name"
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md text-black sm:text-sm border-gray-300"
                    // placeholder="User Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-span-3 sm:col-span-2">
                <label
                  htmlFor="company_website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email 
                </label>
                <div className="mt-1 flex rounded-md h-10 shadow-sm">
            
                  <input
                    type="email"
                    name="company_website"
                    id="company_website"
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    // placeholder="email@"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                </div>
              </div>
          
          </div>
                  </div>
                  <div className="items-center gap-2 mt-3 sm:flex">
                      <button onClick={handleSubmit} className="w-full mt-2 p-2.5 flex-1 text-white bg-yellow-300 rounded-md outline-none ring-offset-2 ring-yellow-600 focus:ring-2"
                      >
                          ok
                      </button>
                    
                  </div>
              </div>
          </div>
      </div>
  ) : ''
)
  
}

export default Conformation