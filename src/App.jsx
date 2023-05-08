
import { useState } from 'react'
import './App.css'

const MenuBar = (props) => {
  return (
    <div className=' w-full fixed top-0 flex justify-around items-center p-4  bg-white'>
      <img className=' h-16' src='logo.png'></img>
      <div className='flex justify-evenly gap-4 items-center'>
        <p className=' hover:text-blue-600 hover:font-bold'>Home</p>
        <p className=' hover:text-blue-600 text-red-600 hover:font-bold' onClick={() => props.setBook(true)}>Booking</p>
      </div>
      <div className='flex items-center gap-4'>
        <button onClick={()=> props.setLogin(true)} type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>
      </div>
      

    </div>
  )
}


const SearchBar = (props) => {
  return (
    <div className=' hidden md:flex gap-2 rounded-xl shadow-xl w-[520px] ml-16 p-4 bg-white'>
      <div>
        <p className='font-bold'>Location</p>
        <select>
          <option>Hammamet</option>
          <option>Sousse</option>
          <option>Sousse</option>

        </select>
      </div>
      <div>
        <p className='font-bold'>Date</p>
        <input type='date'></input>
      </div>
      <div>
        <p className='font-bold'>Price</p>
        <input></input>
      </div>
      <button onClick={() => props.setBook(true)} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </button>
    </div>
  )
}


const Login = (props) => {
  return (
    <div className=' w-full h-full top-0 fixed flex justify-center items-center bg-[#FFFFFF80]' style={{display: props.login? 'flex': 'none'}}>
      <div className=' w-[300px] rounded-xl shadow-xl bg-white flex flex-col gap-2 p-8'>
        <p className=' font-bold text-right cursor-pointer' onClick={() => props.setLogin(false)}>(X)</p>
        <p className=' font-bold text-center'>Login</p>
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"></input>
        </div>
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"></input>
        </div>
        <button onClick={() => props.setLogin(false)} type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>
        <p className=' mt-8 text-sm'>Don't have an account?</p>
        <button onClick={() => {props.setLogin(false); props.setSignup(true)} }  type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5">Create an account</button>

      </div>
    </div>
  )
}


const Book = (props) => {
  return (
    <div className=' w-full h-full top-0 fixed flex justify-center items-center bg-[#FFFFFF80]' style={{display: props.book? 'flex': 'none'}}>
      <div className=' w-[300px] rounded-xl shadow-xl bg-white flex flex-col gap-2 p-8'>
        <p className=' font-bold text-right cursor-pointer' onClick={() => props.setBook(false)}>(X)</p>
        <p className=' font-bold text-center'>Booking Form</p>
        <p className='text-xl text-center text-blue-600'>● ◌ ◌</p>
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"></input>
        </div>
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"></input>
        </div>
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Phone</label>
            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"></input>
        </div>
        <div class="flex items-center">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">I have a guest.</label>
        </div>
        <div class="flex items-center">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900"> I'd like to be picked in the airport.</label>
        </div>
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Flight Number (in case you want to be picked up)</label>
            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"></input>
        </div>
        <button onClick={() => {
          props.setBook(false)
          props.setBook2(true)
          }} type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Next</button>

      </div>
    </div>
  
  )
}

const Book2 = (props) => {
  return (
    <div className=' w-full h-full top-0 fixed flex justify-center items-center bg-[#FFFFFF80]' style={{display: props.book2? 'flex': 'none'}}>
      <div className=' w-[300px] rounded-xl shadow-xl bg-white flex flex-col gap-2 p-8'>
        <p className=' font-bold text-right cursor-pointer' onClick={() => props.setBook2(false)}>(X)</p>
        <p className=' font-bold text-center'>Booking Form</p>
        <p className='text-xl text-center text-blue-600'>● ● ◌</p>
        <p className='text-center'>Room Type</p>
        <div className='flex justify-center items gap-2'>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img class="rounded-t-lg h-24" src="standard.jpg" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Standard Room</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 ">1 to 2 people.</p>
            </div>
          </div>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img class="rounded-t-lg h-24" src="family.webp" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Family Room</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 ">1 to 4 people.</p>
            </div>
          </div>
        </div>
        <button onClick={() => {
          props.setBook2(false)
          props.setBook3(true)
          }} type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Next</button>

      </div>
    </div>
  )
}

const Book3 = (props) => {
  return (
    <div className=' w-full h-full top-0 fixed flex justify-center items-center bg-[#FFFFFF80]' style={{display: props.book3? 'flex': 'none'}}>
      <div className=' w-[400px] rounded-xl shadow-xl bg-white flex flex-col gap-2 p-8'>
        <p className=' font-bold text-right cursor-pointer' onClick={() => props.setBook3(false)}>(X)</p>
        <p className=' font-bold text-center'>Booking Form</p>
        <p className='text-xl text-center text-blue-600'>● ● ●</p>
        <p className='text-center'>Arrival and Departure Dates</p>
        <div className='flex gap-2 justify-center'>
          <div>
            <p className='font-bold'>Arrival</p>
            <input type='date'></input>
          </div>
          <div>
            <p className='font-bold'>Departure</p>
            <input type='date'></input>
          </div>
        </div>
        


        <button onClick={() => {
          props.setBook3(false)
          }} type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>

      </div>
    </div>
  )
}



const SignUp = (props) => {
  const [pwdVisible, setPwdVisible] = useState(false)
  const [conditionMet, setCondMet] = useState([false, false, false, false, false]);
  const [validEmail, setValidEmail] = useState(null)

  const conditions = [
    {key: 0, value: "One lowercase character"},
    {key: 1, value: "One special character"},
    {key: 2, value: "One uppercase character"},
    {key: 3, value: "8 characters minimum"},
    {key: 4, value: "One number"},]

    const validateEmail = (str) => {
      var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      setValidEmail(str.match(emailRegex));
    }
    
const check = (str) => {
  var cond0 = !(str.toUpperCase() == str)
  var cond1 = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str)
  var cond2 = !(str.toLowerCase() == str)
  var cond3 = str.length >= 8
  var cond4 =  /[1234567890]/.test(str)
  setCondMet([cond0, cond1, cond2, cond3, cond4])
}
  return (
    <div className=' w-full h-full top-0 fixed flex justify-center items-center bg-[#FFFFFF80]' style={{display: props.signup? 'flex': 'none'}}>
      <div className=' w-[400px] rounded-xl shadow-xl bg-white flex flex-col gap-2 p-8'>
        <p className=' font-bold text-right cursor-pointer' onClick={() => props.setSignup(false)}>(X)</p>
        <p className=' font-bold text-center'>Sign Up</p>
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"></input>
        </div>
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input onChange={(e) => validateEmail(e.target.value)} type="email" class={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 " + (validEmail? " ring-green-400 border-green-400": ' ring-red-400 border-red-400') }></input>
        </div>
        <div>
          <div className='flex justify-between'>
            <label class="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <p className=' cursor-pointer' onClick={() => setPwdVisible(prev => !prev)}>👁 {pwdVisible? 'hide': 'show'}</p>
          </div>
            
            <input onChange={e => check(e.target.value)} type={pwdVisible? "text": "password"} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"></input>
        </div>
        <div className='flex flex-wrap'>
            {conditions.map(condition => <p>{conditionMet[condition.key]? "✅": "❌"} {condition.value}</p>)}
        </div>
        


        <button onClick={() => {
          props.setSignup(false)
          }} type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign Up</button>

      </div>
    </div>
  )
}

function App() {

  const [login, setLogin] = useState(false)
  const [book, setBook] = useState(false)
  const [book2, setBook2] = useState(false)
  const [book3, setBook3] = useState(false)
  const [signup, setSignup] = useState(false)

  return (
    <div className='absolute w-screen h-screen overflow-x-hidden'>
      <MenuBar setLogin={setLogin} setBook={setBook} setSignup={setSignup}/>
      <div className=' bg w-full h-full flex flex-col gap-8 justify-center'>
        <div className='rounded-xl shadow-xl bg-white max-w-fit p-8 flex flex-col gap-8'>
        <p className='pl-16 text-4xl'>Experience the <b className='text-red-500'>Tunisian</b> <br/> charm.</p>
        <p className='pl-16'>From the golden sand beaches to the beautiful oasis,<br/> the Tunisian experience is an unforgettable one. Book now!</p>
        <SearchBar setBook={setBook}/>
        </div>
       
      </div> 
      <div className='w-full md:pl-16 flex flex-col gap-4'>
        <p className='text-4xl'>Popular Destinations</p>
        <div className='flex gap-16 p-16 overflow-x-scroll md:overflow-hidden'>
          <div>
            <img className='rounded-xl h-64 zoom min-w-[300px]' src='1.jpg'></img>
            <p>Iberostar, Hammamet - ✪ 4</p>
          </div>
          <div>
            <img className='rounded-xl h-64 zoom min-w-[300px]' src='2.jpg'></img>
            <p>Marhaba Palace, El Kantaoui - ✪ 5</p>
          </div>
          <div>
            <img className='rounded-xl h-64 zoom min-w-[300px]' src='3.jpg'></img>
            <p>Thabraca Thalasso & Diving - ✪ 4</p>
          </div>
        </div>
      </div>
      <Login login={login} setLogin={setLogin} setSignup={setSignup}/>
      <SignUp signup={signup} setSignup={setSignup}/>
      <Book book={book} setBook={setBook} setBook2={setBook2}/>
      <Book2 book2={book2} setBook2={setBook2} setBook3={setBook3}/>
      <Book3 book3={book3} setBook3={setBook3}/>
    </div>
  )
}

export default App