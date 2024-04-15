function search()
{
    let search = document.getElementById("searcher").value
    let web = "#";

    if(search=="o nas" || search=="about" || search=="sobre nosotros")
    {
        web+="about";
    }
    else if(search=="samoloty" || search=="planes" || search=="aviones")
    {
        web+="planes";
    }
    else if(search=="oferty" || search=="offers" || search=="ofertas")
    {
        web+="offers";
    }
    else if(search=="krajobrazy" || search=="landscapes" || search=="paisajes")
    {
        web+="sights";
    }
    else if(search="formularz" || search=="form" || search=="forma")
    {
        web+="form";
    }
    else
    {
        web = null;
    }
    
    open(web);
}