class complex
{
    int real ,image;
    public complex(){}
    public complex(int r ,int i)
    {
        this.real = r;
        this.image = i;
    }

    public void add(complex o1 ,complex o2)
    {
        real = o1.real + o2.real;
        image = o1.image + o2.image;
    }

    public void show()
    {
        System.out.println(" * : "+real+" + "+image+"i");
    }

    public static void main(String args[])
    {
        complex c1 = new complex(3,4);
        c1.show();
        complex c2 = new complex(4,6);
        c2.show();
        complex c3 = new complex();
        c3.add(c1, c2);
        c3.show();

        
    }
}