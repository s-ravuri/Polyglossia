def unique_characters(file_path):
    """
    This function accepts a text file path, reads the content of the file,
    and returns a list of all unique characters in UTF-8 encoding.
    
    :param file_path: Path to the text file
    :return: List of unique characters
    """
    unique_chars = set()
    
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            for line in file:
                unique_chars.update(line)
        
        # Convert set to sorted list before returning
        return sorted(unique_chars)
    
    except FileNotFoundError:
        print(f"The file at {file_path} was not found.")
        return []
    except Exception as e:
        print(f"An error occurred: {e}")
        return []


def unique_words(file_path):
    """
    This function accepts a text file path, reads the content of the file,
    and returns a list of all unique words in UTF-8 encoding.
    
    :param file_path: Path to the text file
    :return: List of unique words
    """
    unique_words_set = set()
    
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            for line in file:
                words = line.split()
                unique_words_set.update(words)
        
        # Convert set to sorted list before returning
        return sorted(unique_words_set)
    
    except FileNotFoundError:
        print(f"The file at {file_path} was not found.")
        return []
    except Exception as e:
        print(f"An error occurred: {e}")
        return []

# Example usage:
# unique_chars = unique_characters('path_to_your_file.txt')
# print(unique_chars)
# unique_words_list = unique_words('path_to_your_file.txt')
# print(unique_words_list)
