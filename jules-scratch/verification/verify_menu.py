from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto('file://' + os.path.abspath('src/index.html'))
        page.screenshot(path='jules-scratch/verification/verification.png')
        browser.close()

run()
