Function sierpinski()
{
  initialize_the_system();
  P = find_initial_point();

For (some_number_of_points)
{
q = generate_a_point(p);
display_the_point(q);
p = q;
}
cleanup();
}
	