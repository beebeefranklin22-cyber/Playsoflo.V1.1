-- Create feed view
CREATE OR REPLACE VIEW public.user_feed AS
SELECT
  p.id,
  p.user_id,
  pr.username,
  pr.display_name,
  pr.avatar_url,
  p.content,
  p.media_url,
  p.created_at
FROM public.posts p
JOIN public.profiles pr ON p.user_id = pr.id
ORDER BY p.created_at DESC;
