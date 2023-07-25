const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar)
{
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close)
{
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

function couponfun()
{
    var x= document.getElementById("Couponid");
    if(x===7256)
    {
        alert("Coupon Applied Successfully");
    }
    else
    {
        alert("Invalid Coupon")
    }
}