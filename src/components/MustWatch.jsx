import mastWatchPhoto from "../assets/mustwatch.jpg"

export default function MustWatch() {
    return (
        <div className=' p-2 sm:p-5 lg:p-10'>
            <p className=' font-semibold text-lg'>Must Watch</p>
            <img src={mastWatchPhoto} alt="" className=' w-full object-cover' />
            <p className=' mt-2 text-lg font-semibold'>In This Together: Teens Help At-Risk Individuals, Photo Series Celebrates Black Girls</p>
        </div>
    )
}
