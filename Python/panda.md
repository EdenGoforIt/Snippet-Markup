# index

# select row

```
 data.iloc[4:6]
```

# select by column

```
data['population']
data[['population']] // with column name

```

# select by row and column

```
 data.loc[4:6, ['year']]

data.loc[4:6, 'nation': 'year']
data.loc[4:6, [0,2]]
```

# add a new column

```
data['newColunm'] = np.sqrt(data['population']).astype(int)

```

# delete a column

```
data = data.drop(column=['sqrtPopulation'])
```

# change the value

```
data.iloc[3,4] = True
```
