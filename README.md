-- Register new user
INSERT INTO users (username, password, role) VALUES ('john', 'hashed_password', 'Artist');

-- Artist uploads video
INSERT INTO videos (title, description, category, genre, video_url, thumbnail_url, artist_id, status)
VALUES ('Sample Video', 'Test', 'Drama', 'Action', 'video.mp4', 'thumb.jpg', 2, 'pending');

-- Admin approves video
UPDATE videos SET status = 'approved' WHERE id = 'abc123';

-- Admin rejects video
DELETE FROM videos WHERE id = 'abc123';
