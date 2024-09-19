Function sierpinski()
{
initialize_the_system();
p = find_initial_point();

for (some_number_of_points)
{
q = generate_a_point(p);
store_the_point(q);
p = q;
}
display_all_points();
cleanup();

var u = mult(0.5, add(vertices[0], vertices[1]));
var v = mult(0.5, add(vertices[0], vertices[2]));
var p = mult(0.5, add(u, v));

Positions.push(p);

for (var i = 0; i < numPosition - 1; ++i)
{
var j = Math.floor(Math.random() * 3);

p = mult(0.5, add(position[I], vertices[j]));
positions.push(p);

}




	