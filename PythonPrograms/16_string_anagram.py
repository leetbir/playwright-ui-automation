s1="swiss"
s2="the"


# two string are anagram is both string are equal
# and they contain same character in same frequence


if len(s1)!=len(s2):
    print("string are not of equal length so strings are not anagram")
else:
    sorted_s1=sorted(s1)
    sorted_s2=sorted(s2)
    if sorted_s1==sorted_s2:
        print("they are anagram")
    else:
        print("string are equal but still not anagram due to frequency mismatch")
