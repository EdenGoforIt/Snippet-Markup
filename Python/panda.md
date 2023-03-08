# index

## select row

```
 data.iloc[4:6]
```

## select by column

```
data['population']
data[['population']] // with column name

```

## select by row and column

```
 data.loc[4:6, ['year']]

data.loc[4:6, 'nation': 'year']
data.loc[4:6, [0,2]]
```

## add a new column

```
data['newColunm'] = np.sqrt(data['population']).astype(int)

```

## delete a column

```
data = data.drop(column=['sqrtPopulation'])
```

## change the value

```
data.iloc[3,4] = True
```

# File Input/Oupput

## read specific rows and columns

```
pd.read_csv("../datasets/wine_data.csv", nrows=5, usecols=[6,7,8,9,10,11,12])
```

## Cheatsheet

```
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




```
