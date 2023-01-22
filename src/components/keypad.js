export default function keypad({text , themeIndex ,type,onClick,}) {
    return(
    <>
    {type == "num" ? 
    <button 
        value={text} 
        onClick={onClick}
        className={`bg-keysTheme${themeIndex}-keyBg2 myFont text-4xl flex items-center justify-center py-2 rounded-lg shadow-3xl shadow-keysTheme${themeIndex}-keyShadow3 text-textTheme${themeIndex}-text1 transition hover:scale-90`}>
        <p className="pt-2">{text}</p>
    </button>
    : type == "func" ? 
    <button
        value={text} 
        onClick={onClick}
        className={`bg-keysTheme${themeIndex}-keyBg1 myFont text-2xl flex items-center justify-center py-2 rounded-lg shadow-3xl shadow-keysTheme${themeIndex}-keyShadow1 text-white transition hover:scale-90`}>
        <p className="pt-2">{text}</p>
    </button>
    : type == "equal" ? 
    <button
        value={text} 
        onClick={onClick}
        className={`bg-keysTheme${themeIndex}-keyToggleBg1 myFont text-4xl flex items-center justify-center py-2 rounded-lg shadow-3xl shadow-keysTheme${themeIndex}-keyShadow2 text-textTheme${themeIndex}-text2 transition hover:scale-90`}>
        <p className="pt-2">{text}</p>
    </button>
    :null }
    </>
    )

}