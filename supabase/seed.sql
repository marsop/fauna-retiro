-- Create animals table
CREATE TABLE IF NOT EXISTS public.animals (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  display_order integer NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for animals
ALTER TABLE public.animals ENABLE ROW LEVEL SECURITY;

-- Allow public read access to animals
CREATE POLICY "Allow public read access to animals"
  ON public.animals
  FOR SELECT
  TO public
  USING (true);

-- Create user_progress table (for future authenticated or anon users)
CREATE TABLE IF NOT EXISTS public.user_progress (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid,
  animal_id uuid NOT NULL REFERENCES public.animals(id) ON DELETE CASCADE,
  found_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for user_progress
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Allow users to manage their own progress
CREATE POLICY "Users can insert their own progress"
  ON public.user_progress
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can read their own progress"
  ON public.user_progress
  FOR SELECT
  TO public
  USING (true);

-- Insert Seed Data
INSERT INTO public.animals (id, name, description, image_url, display_order) VALUES
('b3c14c53-b827-4a6c-b3a7-33d3cf6e1544', 'Red Squirrel', 'Look near the trees! It has brown fur and a bushy tail.', '/images/red-squirrel.jpg', 1),
('c8e03004-9a8d-4e94-8178-58de2086e3f8', 'Mallard Duck', 'Check near the water! You might hear it quack.', '/images/mallard-duck.jpg', 2),
('6fa3f793-1b91-49b8-a63e-42c237f3747b', 'Monarch Butterfly', 'Look around the flowers. It has orange and black wings!', '/images/monarch-butterfly.jpg', 3),
('284d7cb0-e54e-4f76-8809-906fb3c25b04', 'Ladybug', 'Search the leaves. It is small, red, and has black spots.', '/images/ladybug.jpg', 4),
('8664b9fc-ff43-4e3a-9694-0cfb2e6a1cd0', 'Green Frog', 'Look closely near the pond. It jumps high!', '/images/green-frog.jpg', 5);
