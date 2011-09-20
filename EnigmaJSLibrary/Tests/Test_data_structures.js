
//Testing lists

mylist = ds_list_create();
//ds_list_destroy(mylist);
ds_list_add(mylist, 10);
ds_list_add(mylist, 5);
ds_list_add(mylist, 20);
ds_list_add(mylist, 12);
//alert(ds_list_find_index(mylist,20));

ds_list_shuffle(mylist);
ds_list_sort(mylist,false);
ds_list_replace(mylist,1,99999);
ds_list_insert(mylist,1,55555);
ds_list_delete(mylist,1);

//ds_list_clear(mylist);
//alert(ds_list_empty(mylist));

var message="";
for (var i=0; i<ds_list_size(mylist);i++){
message+=ds_list_find_value(mylist,i)+", ";
}
alert(message);

/*
 Testing stacks
*/

mystack = ds_stack_create();
//ds_stack_destroy(mystack);
ds_stack_push(mystack, 10);
ds_stack_push(mystack, 5);
ds_stack_push(mystack, 20);
ds_stack_push(mystack, 12);
alert(ds_stack_pop(mystack));
alert(ds_stack_top(mystack));
alert(ds_stack_top(mystack));

//ds_stack_clear(mystack);
alert(ds_stack_empty(mystack));