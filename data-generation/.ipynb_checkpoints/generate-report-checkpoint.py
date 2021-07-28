import random
import csv
import json

import random
import time
    

author_file = open('authors.txt', 'r')
authors = author_file.readlines()
authors = [x.strip() for x in authors]

#content = [x.strip() for x in content]

noun_file = open('nouns.txt', 'r')
nouns = noun_file.readlines()
nouns = [x.strip() for x in nouns]

#https://stackoverflow.com/questions/553303/generate-a-random-date-between-two-other-dates

import random
import time
    
def str_time_prop(start, end, time_format, prop):
    """Get a time at a proportion of a range of two formatted times.

    start and end should be strings specifying times formatted in the
    given format (strftime-style), giving an interval [start, end].
    prop specifies how a proportion of the interval to be taken after
    start.  The returned time will be in the specified format.
    """

    stime = time.mktime(time.strptime(start, time_format))
    etime = time.mktime(time.strptime(end, time_format))

    ptime = stime + prop * (etime - stime)

    return time.strftime(time_format, time.localtime(ptime))


def random_date(start, end, prop):
    return str_time_prop(start, end, '%m/%d/%Y', prop)
    

    
def generate_products(n_products):
    products = []
    for i in range(n_products):
        first_index = random.randint(0, len(nouns)) - 1
        second_index = random.randint(0, len(nouns)) - 1
        
        first = nouns[first_index].capitalize()
        second = nouns[second_index].capitalize()
        
        
        product = first + " " + second
        cost = random.randint(0,500)
        
        
        
        products.append({
            'productName' : product,
            'productCost' : cost,
            'numberSold' : 0
        })
        
    return products


def generate_orders(n_orders_per_customers):
    
    
    adjuster = random.randint((-n_orders_per_customers)+1, n_orders_per_customers)
    
    adjusted_n_orders = n_orders_per_customers + adjuster
    
    orders = []
        
    for i in range(adjusted_n_orders):
        product_index = random.randint(0, len(products)) - 1
        product = products[product_index]
        products[product_index]['numberSold'] += 1
        
        saleDate = random_date("1/1/2012", "7/20/2021", random.random())
        
        order = {
            'productPurchased' : product,
            'orderDate' : saleDate
        }
        
        orders.append(order)
    
    return orders

def generate_customer(n_orders_per_customers):
    
    
    author_index = random.randint(0, len(authors)) - 1
    
    customer = {}
    
    orders = generate_orders(n_orders_per_customers)
    
    customer['customerName'] = authors[author_index]
    customer['orders'] = orders
    
    return customer 
    
    
    
def generate_db(products, n_customers, n_orders_per_customer):
    
    report = {}
    
    for i in range(n_customers):
        #Generate customer
        #Generate product Ordered
        #Generate date o
        customer = generate_customer(n_orders_per_customer)
        
        report[i] = customer

        
    db = {
        'orders' : report,
        'products' : products
    }
    
    

    return db


if __name__ == '__main__':
    
    c_or_d = input('Custom settings? (y/n): ')
    
    if c_or_d == 'y':
        n_products = input('Number of products: ')

        #Generate a static list of fake products
        products = generate_products(n_products)

        n_customers = input('Number of customers: ')
        n_orders_per_customer = input('Avg number of orders per customer: ')

        report = generate_db(products, n_customers, n_orders_per_customer)

        #Write report to JSON format
        with open('../db.json', 'w') as outfile:
            json.dump(report, outfile)
            
    else:
        print('Using default settings: \n 15 products \n 100 customers \n average of 10 orders per customer')
        products = generate_products(15)

        report = generate_db(products, 100, 10)

        #Write report to JSON format
        with open('../db.json', 'w') as outfile:
            json.dump(report, outfile)
            
        print('\n Done.')