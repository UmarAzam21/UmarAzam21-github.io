import re

with open('src/portfolio.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the corrupted image line for CustomLearn
content = re.sub(
    r'image: require\("\.\/assets\/images\/skill\.svg"\),.*?(?=projectName)',
    'image: require("./assets/images/skill.svg"),\n      ',
    content,
    flags=re.DOTALL
)

with open('src/portfolio.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Fixed portfolio.js!')
