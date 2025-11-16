#for macOS / Linux / Git Bash
#!/usr/bin/env bash
python3 -m venv .venv
# activate for this script
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
echo "Done. Activate with: source .venv/bin/activate"
