function echo(param){
    const typeName = typeof(param);

    if (typeName === 'string' || typeName === 'number'){
        console.log(typeName);
        console.log(param);
    }
    else{
        console.log(typeName);
        console.log('Parameter is not suitable for printing');
    }
}
echo('Hello, JavaScript!');
echo(18);
echo(null);
