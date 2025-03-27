import os

# Directories to ignore
IGNORE_DIRS = {'.git', 'node_modules'}

def print_tree(start_path, prefix=''):
    entries = sorted(os.listdir(start_path))
    entries = [e for e in entries if e not in IGNORE_DIRS]

    for index, entry in enumerate(entries):
        path = os.path.join(start_path, entry)
        connector = '├── ' if index < len(entries) - 1 else '└── '
        print(prefix + connector + entry)

        if os.path.isdir(path):
            extension = '│   ' if index < len(entries) - 1 else '    '
            print_tree(path, prefix + extension)

if __name__ == '__main__':
    import sys
    root_dir = sys.argv[1] if len(sys.argv) > 1 else '.'
    print(root_dir)
    print_tree(root_dir)
