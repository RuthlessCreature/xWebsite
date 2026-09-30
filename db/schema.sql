CREATE TABLE IF NOT EXISTS inquiries (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  company TEXT,
  contact_name TEXT,
  email TEXT,
  phone TEXT,
  country TEXT,
  preferred_contact TEXT,
  project_type TEXT,
  budget TEXT,
  timeline TEXT,
  language TEXT,
  source_page TEXT,
  description TEXT,
  files_json TEXT,
  email_sent INTEGER DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at);
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON inquiries(email);
CREATE INDEX IF NOT EXISTS idx_inquiries_project_type ON inquiries(project_type);
