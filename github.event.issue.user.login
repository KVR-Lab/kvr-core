name: K.V.R Command Bridge

on:
  issues:
    types: [opened]

permissions:
  contents: write
  issues: write

jobs:
  execute:
    if: github.event.issue.user.login == 'Bobdedoxrx'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.11"
      - name: Run K.V.R Agent
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
          KVR_COMMAND: ${{ github.event.issue.title }} - ${{ github.event.issue.body }}
        run: python kvr_agent.py
      - name: Commit Changes
        run: |
          git config --global user.name "K.V.R Sovereign Engine"
          git config --global user.email "kvr-engine@kvrat.ai"
          git add .
          git diff --staged --quiet || (git commit -m "feat(kvr): execute issue #${{ github.event.issue.number }}" && git push)
