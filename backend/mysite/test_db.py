from db import get_mongo_client

def test_connection():
    client = get_mongo_client()
    if client is not None:
        print("MongoDB client is successfully created.")
    else:
        print("MongoDB client creation failed.")

if __name__ == "__main__":
    test_connection()