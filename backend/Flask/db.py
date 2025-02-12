import mysql.connector

def get_db_connection():
    try:
        connection = mysql.connector.connect(
            host="localhost",        # Change if using a remote server
            user="root",             # Your MySQL username
            password="ankit5787@",  # Your MySQL password
            database="final_year" # Your MySQL database name
        )
        print("Database connected successfully!")
        return connection
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return None
