class CustomMatch 
{
    constructor (initial_value)
    {
        this.InitialValue = initial_value;
    }
    plus = function (value)
    {
        this.InitialValue += value;
        return this.InitialValue;
    }
    minus = function (value)
    {
        this.InitialValue -= value;
        return this.InitialValue;
    }
    multiply = function (value)
    {
        this.InitialValue *= value;
        return this.InitialValue;
    }
    divide = function (value)
    {
        this.InitialValue /= value;
        return this.InitialValue;
    }

}
var result = new CustomMatch(50);
result.plus(6);
result.minus(30);
result.multiply(3);
result.divide(2);


console.log(result);