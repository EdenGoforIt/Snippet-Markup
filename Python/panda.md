# index

## select row

```python
 data.iloc[4:6]
```

## select by column

```python
data['population']
data[['population']] // with column name

```

## select by row and column

```python
 data.loc[4:6, ['year']]

data.loc[4:6, 'nation': 'year']
data.loc[4:6, [0,2]]
```

## add a new column

```python
data['newColunm'] = np.sqrt(data['population']).astype(int)

```

## delete a column

```python
data = data.drop(column=['sqrtPopulation'])
```

## change the value

```python
data.iloc[3,4] = True
```

# File Input/Oupput

## read specific rows and columns

```python
pd.read_csv("../datasets/wine_data.csv", nrows=5, usecols=[6,7,8,9,10,11,12])
```

## Cheatsheet

```python
wine_df.dropna()  # drop records having empty values in any column
wine_df.dropna(how='all') # when all values are empty
wine_df.dropna(thresh=4)  # 4 values in a row should be present
wine_df[wine_df['3'].notnull()] # show rows having values in column 3
wine_df.fillna(0) # fill 0 for empty values
wine_df.fillna(method='ffill') # fill value if empty by the preceding value by one row
wine_df['3'].fillna(wine_df['3'].mean()) # fill empty values with average values
wine_df.loc[2].fillna(wine_df.mean()) # fill the second row with average values
wine_df.dropna(inplace=True) # make that permanent or persisted
wine_df.columns = ['Class','Alcohole', 'Malic acid', 'Ash', 'Alcalinity of ash'] # change column names as these
col_dict = {
    0: 'Class',
    1: 'Alcohole',
    2: 'Malic acid',
    3: 'Ash',
    4: 'Alcalinity of ash'
}
wine_df.rename(columns=col_dict);   # rename column properly

data.sort_values(by = ['population'],ascending=False) # sort by ascending
data[['nation','population','year']].sort_values(ascending=[False,True], by=['nation', 'population']) # by multiple

data.population.rank(ascending=False) # rank

ts_data.head() # items ascending
ts_data.tail() # items from the bottom

ts_data.info() # get the data type for each column

ts_data['Date'] = pd.to_datetime(ts_data['Date'], format='%Y-%m-%d') # convert object to date

## making indexes

ts_data = ts_data.set_index(['Date']) # make date as index or record identifier
ts_data = pd.read_csv('../datasets/appleStockPrice.csv', index_col='Date', parse_dates=True)


## get rows having row name of
ts_data.loc['2016'] # return rows having 2016
ts_data.loc['2016-2']

ts_data.loc['2015-09':'2016-12']  # between
ts_data.truncate(before='2015-12-1', after='2016-1-31') # use truncate

## order of the index
ts_data.sort_index(ascending=True, inplace=True)

# columns
ts_data['shifted'] = ts_data['Adj Close'].shift(1) # add a new column called shifted and move one row up

# Resample
ts_data['Adj Close'].resample('A').ohlc() #Compute open, high, low and close values of a group, excluding missing values.
ts_data.loc['1990': '2010'].resample('Q').mean()
plt.plot( ts_data[['Adj Close']].resample('5A').mean()) # every 5 years

## plot

rcParams['figure.figsize'] = 15, 10
ts_data.plot(subplots=True)              # two lines to show a graph separately for each column

ts_data[['Adj Close', 'Volume']].loc['2007':'2010'].plot(subplots=True)  # grab columns and rows having those names


oil_price.to_csv('test.csv')

server_data.describe() # easily extract most of the simple summary statistics.

%pip install bokeh # install packages.

cm = cm.iloc[1:] # show the row from the row 1 when we make the header with the first row

cm.columns = ['Column1', 'Column2'] # when we redefine the columns

cm.reset_index() # when reset index or row number (normally row number is used for index and row number mixed up when adding or deleting rows)

pd.concat([df1, df3], axis=1) # when adding more columns

pd.concat([df1, df2], ignore_index=True, sort=False) # when adding more rows

df1[[0,1]].combine_first(df2[[0,1]])  # override the value from the right to the left if empty


```

# web scraping

```
page = BeautifulSoup(html_doc, "html.parser") # using html.parser instead of lxml
body = page.find(name='body')
h1 = body.find(name='h1') # Find the 'h1' element inside of the 'body' tag
p = page.find(name='p')
all_p = page.findAll(name='p')
all_p[0]['id'] # Specific attribute value of a specific element # access through ID
page.find(name='p', attrs={"id":"intro"}) # access through ID
page.findAll("li", "hobby") # find by class

result = json.loads(obj) # deserialize to objects

as_json = json.dumps(result) #serialize to json or string

```
