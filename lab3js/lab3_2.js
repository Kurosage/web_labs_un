var filter = function (arr, func, arg)
{
    var i;
    var len = arr.length;
    var new_arr = [];
    for (i = 0; i < len; i = i + 1) 
    {
        if (func.call(arg, arr[i], i, arr)) 
        {
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
};
