

interface InputProps{
    type:string,
    title:string
    placeholder:string
}

function InputBox(props:InputProps) {
    
  return (
    <div>
       <div>
                <label htmlFor={props.type} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {props.title}
                </label>
                <input
                  type={props.type}
                  name={props.type}
                  id={props.type}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={props.placeholder}
                  required
                />
              </div>
    </div>
  )
}

export default InputBox
 